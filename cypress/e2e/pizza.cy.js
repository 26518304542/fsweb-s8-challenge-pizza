describe("Teknolojik Yemekler Uygulaması", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Ana sayfa düzgün render ediliyor mu?", () => {
    cy.get(".main-header .header-logo").should("contain", "Teknolojik Yemekler");
    cy.get(".header-banner h1").should("contain", "KOD ACIKTIRIR");
    cy.get(".cta-btn").should("contain", "ACIKTIM");
  });

  it("Ürün kartına tıklayınca OrderPage açılıyor mu?", () => {
    cy.contains(".fifth-card", "Position Absolute Acı Pizza").click();
    cy.contains("Position Absolute Acı Pizza").should("exist");
    cy.contains("60₺").should("exist");
    // Form reset kontrolü
    cy.get('input[name="name"]').should('have.value', '');
    cy.get('textarea[name="notes"]').should('have.value', '');
    cy.contains('Anasayfa').click();
    cy.get(".main-header .header-logo").should("exist");
  });

  it("useEffect Tavuklu Burger ürünü doğru bilgileri gösteriyor mu?", () => {
    cy.contains(".fifth-card", "useEffect Tavuklu Burger").click();
    cy.contains("useEffect Tavuklu Burger").should("exist");
    cy.contains("60₺").should("exist");
    cy.contains("özel tavukla hazırlanmış").should("exist");
    cy.contains('Anasayfa').click();
  });

it("Sipariş Ver butonları (kampanya kartları) doğru çalışıyor mu?", () => {
  cy.get(".third .siparis-ver").each(($btn, index) => {
    // Butonu her seferinde yeniden bul
    cy.get(".third .siparis-ver").eq(index).click();
    cy.contains("Position Absolute Acı Pizza").should("exist");
    cy.contains("Anasayfa").click();
  });
});


  it("Navigation ikonları sayfada doğru şekilde görünüyor mu?", () => {
    cy.get(".nav-icons ul li").should("have.length", 6);
    cy.get(".nav-icons ul li").first().should("contain", "YEMEK");
  });

  it("Footer'da iletişim bilgileri doğru şekilde görünüyor mu?", () => {
    cy.get("footer").within(() => {
      cy.contains("341 Londonderry Road");
      cy.contains("aciktim@teknolojikyemekler.com");
      cy.contains("+90 216 123 45 67");
    });
  });

  it("State lifting: form resetleniyor mu?", () => {
    cy.contains(".fifth-card", "Position Absolute Acı Pizza").click();
    cy.get('input[name="name"]').type('Test User');
    cy.get('textarea[name="notes"]').type('Extra cheese');
    cy.contains('Anasayfa').click();
    cy.contains(".fifth-card", "Terminal Pizza").click();
    cy.get('input[name="name"]').should('have.value', '');
    cy.get('textarea[name="notes"]').should('have.value', '');
  });
});