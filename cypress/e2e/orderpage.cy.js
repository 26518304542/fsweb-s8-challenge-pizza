describe("Order Page - Sipariş Formu Testleri", () => {
  beforeEach(() => {
    // Uygulama içinden doğru şekilde yönlendirme yapılır
    cy.visit("http://localhost:5173");
    cy.contains("Position Absolute Acı Pizza").click(); // Ürün kartı üzerinden
  });

  it("Sayfa başarılı şekilde render ediliyor mu?", () => {
    cy.contains("İsim").should("exist");
    cy.contains("Position Absolute Acı Pizza").should("exist");
    cy.contains("60₺").should("exist");
  });

  it("İsim girmeden form gönderilemez (validasyon kontrolü)", () => {
    cy.get("button[type='submit']").should("be.disabled");

    cy.get("input[name='name']").type("Al");
    cy.contains("İsim en az 3 karakter olmalı").should("exist");

    cy.get("input[name='name']").clear().type("Ali");
    cy.contains("İsim en az 3 karakter olmalı").should("not.exist");
  });

  it("Boyut, hamur ve malzeme seçilmeden form gönderilemez", () => {
    cy.get("input[name='name']").type("Ali");
    cy.get("button[type='submit']").should("be.disabled");

    cy.get("input[type='radio'][value='Orta']").check();
    cy.get("select[name='dough']").select("Orta");

    // Yetersiz malzeme (3 tane)
    cy.get("input[type='checkbox'][value='Sucuk']").check();
    cy.get("input[type='checkbox'][value='Soğan']").check();
    cy.get("input[type='checkbox'][value='Mısır']").check();

    cy.get("button[type='submit']").should("be.disabled");

    // 4. malzeme seçilince form geçerli olur
    cy.get("input[type='checkbox'][value='Biber']").check();
    cy.get("button[type='submit']").should("be.enabled");
  });

  it("Malzeme sınırı çalışıyor mu? (10’dan fazla seçilememeli)", () => {
    const ingredients = [
      "Peperoni", "Tavuk Izgara", "Mısır", "Sarımsak", "Ananas",
      "Sosis", "Soğan", "Sucuk", "Biber", "Kabak"
    ];
    cy.get("input[name='name']").type("Test Kullanıcı");
    cy.get("input[type='radio'][value='Orta']").check();
    cy.get("select[name='dough']").select("Kalın");

    ingredients.forEach((malzeme) => {
      cy.get(`input[type='checkbox'][value="${malzeme}"]`).check({ force: true });
    });

    cy.get("input[type='checkbox']:checked").should("have.length.lte", 10);
  });

  it("Sipariş adedi arttırılıp azaltılabiliyor mu?", () => {
    cy.get("[data-testid='total-price']").should("contain", "60");



    cy.get("button").contains("+").click().click();
    cy.get("[data-testid='total-price']").should("contain", "180");


    cy.get("button").contains("-").click();
    cy.get("[data-testid='total-price']").should("contain", "120");
  });

  it("Geçerli form başarılı şekilde gönderiliyor mu?", () => {
    cy.intercept({
      method: "POST",
      url: "https://reqres.in/api/pizza",
      headers: {
        "x-api-key": "reqres-free-v1"
      }
    }).as("formSubmit");

    cy.get("input[name='name']").type("Ali Kodcu");
    cy.get("input[type='radio'][value='Orta']").check();
    cy.get("select[name='dough']").select("Orta");

    ["Sucuk", "Biber", "Soğan", "Mısır"].forEach(item => {
      cy.get(`input[type='checkbox'][value="${item}"]`).check();
    });

    cy.get("textarea[name='notes']").type("Lütfen hızlı getiriniz.");
    cy.get("button[type='submit']").should("be.enabled").click();

    cy.wait("@formSubmit").its("response.statusCode").should("eq", 201);
    cy.url().should("include", "/success");
  });
});
