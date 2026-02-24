describe('Cart Test', () => {

  // Login trước mỗi test
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com');

    cy.get('#user-name').type('standard_user');
    cy.get('#password').type('secret_sauce');
    cy.get('#login-button').click();
  });

  // 1. Thêm sản phẩm
  it('Thêm sản phẩm vào giỏ', () => {
    cy.get('.inventory_item')
      .first()
      .find('.btn_inventory')
      .click();

    cy.get('.shopping_cart_badge')
      .should('have.text', '1');
  });

  // 2. Sắp xếp giá
  it('Sắp xếp giá thấp đến cao', () => {
    cy.get('.product_sort_container').select('lohi');

    cy.get('.inventory_item_price')
      .first()
      .should('have.text', '$7.99');
  });

  // 3. ❗ XÓA SẢN PHẨM (YÊU CẦU ĐỀ)
  it('Xóa sản phẩm khỏi giỏ hàng', () => {

    // Thêm vào giỏ
    cy.get('.inventory_item')
      .first()
      .find('.btn_inventory')
      .click();

    cy.get('.shopping_cart_badge')
      .should('have.text', '1');

    // Nhấn Remove
    cy.get('.inventory_item')
      .first()
      .find('.btn_inventory')
      .click();

    // Kiểm tra giỏ trống
    cy.get('.shopping_cart_badge')
      .should('not.exist');
  });

  // 4. ❗ CHECKOUT (YÊU CẦU ĐỀ)
  it('Thực hiện checkout', () => {

    // Thêm sản phẩm
    cy.get('.inventory_item')
      .first()
      .find('.btn_inventory')
      .click();

    // Vào giỏ hàng
    cy.get('.shopping_cart_link').click();

    // Checkout
    cy.get('#checkout').click();

    // Nhập thông tin
    cy.get('#first-name').type('John');
    cy.get('#last-name').type('Doe');
    cy.get('#postal-code').type('12345');

    cy.get('#continue').click();

    // Kiểm tra sang trang xác nhận
    cy.url().should('include', '/checkout-step-two.html');
  });

});