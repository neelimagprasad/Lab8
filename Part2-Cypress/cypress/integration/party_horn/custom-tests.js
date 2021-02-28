describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('Slider changes when volume input changes', () => {
    cy.get('#volume-number').clear().type('75');
    cy.get('#volume-slider').then(($el) => {
      expect($el).to.have.value(75);
    })
  });

  it('Volume input changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#volume-number').then(($el) => {
      expect($el).to.have.value(33);
    });
  });

  it('Volume of audio element changes when slider changes', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input');
    cy.get('#horn-sound').then(($el) => {
        expect($el).to.have.prop('volume',0.33)
      })
  });

  it('image and sound sources change when party horn is selected', () => {
    cy.get('#radio-party-horn').check();
    cy.get('#horn-sound').then(($el) => {
      expect($el).to.have.attr('src', "./assets/media/audio/party-horn.mp3");
    });
    cy.get('#sound-image').then(($el)=> {
      expect($el).to.have.attr('src', "./assets/media/images/party-horn.svg")
    });
  });

  it('volume image changes when increasing volumes', () => {
    cy.get('#volume-number').clear().type('0')
    cy.get('#volume-image').then(($el) => {
        expect($el).to.have.attr('src',"./assets/media/icons/volume-level-0.svg")
    })
    cy.get('#volume-number').clear().type('15')
    cy.get('#volume-image').then(($el) => {
        expect($el).to.have.attr('src',"./assets/media/icons/volume-level-1.svg")
    })
    cy.get('#volume-number').clear().type('45')
    cy.get('#volume-image').then(($el) => {
        expect($el).to.have.attr('src',"./assets/media/icons/volume-level-2.svg")
    })
    cy.get('#volume-number').clear().type('68')
    cy.get('#volume-image').then(($el) => {
        expect($el).to.have.attr('src',"./assets/media/icons/volume-level-3.svg")
    })
  });

  it('honk button is disabled when textbox is empty or a non-number', () => {
    cy.get('#volume-number').clear().type('0');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled');
    });
    cy.get('#volume-number').clear().type('a');
    cy.get('#honk-btn').then(($el) => {
      expect($el).to.have.attr('disabled');
    }); 
  });

  it('error is shown when number outside range', () => {
    cy.get('#volume-number').clear().type('101')
    cy.get('input:invalid').should('have.length', 1);  
  });

});
