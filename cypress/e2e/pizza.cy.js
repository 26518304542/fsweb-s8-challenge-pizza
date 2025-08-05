describe("Teknolojik Yemekler Uygulaması", () => {
  beforeEach(() => {
    cy.visit("http://localhost:5173");
  });

  it("Ana sayfa düzgün render ediliyor mu?", () => {
    cy.get(".main-header .header-logo").should("contain", "Teknolojik Yemekler");
    cy.get(".header-banner h1").should("contain", "KOD ACIKTIRIR");
    cy.get(".cta-btn").should("contain", "ACIKTIM");
  });

  it("Position Absolute Acı Pizza kartına tıklayınca orderpage'e yönlendiriyor mu?", () => {
    cy.contains("Position Absolute Acı Pizza").click();
    cy.url().should("include", "/orderpage");
    cy.contains("Position Absolute Acı Pizza").should("exist");
    cy.contains("60₺").should("exist");
  });

  it("useEffect Tavuklu Burger ürünü doğru bilgileri gönderiyor mu?", () => {
    cy.contains("useEffect Tavuklu Burger").click();
    cy.url().should("include", "/orderpage");
    cy.contains("useEffect Tavuklu Burger").should("exist");
    cy.contains("60₺").should("exist");
    cy.contains("özel tavukla hazırlanmış").should("exist");
  });

  it("Sipariş Ver butonları doğru çalışıyor mu? (Üst kart)", () => {
    cy.get(".button-and-text button").contains("Sipariş Ver").click();
    cy.url().should("include", "/orderpage");
    cy.contains("Position Absolute Acı Pizza").should("exist");
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
});
