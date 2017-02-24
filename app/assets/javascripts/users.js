/* global $, Stripe */
//Document ready.
$(document).on('turbolinks:load', function(){
  var theForm = $('#pro_form');
  var submitBtn = $('#form-submit-btn');
  //Set Stripe public key.
  Stripe.setPublishableKey( $('meta[name = "stripe-key"]').attr('content') );
  
  //When user clicks form submit btn.
  submitBtn.click(funtion(event) {
    //prevent default submission form.
    event.preventDefault();
    
    //Collect the credit card fields.
    var ccNum = $('#card_number').val(),
        cvcNum = $('#card_code').val(),
        expMonth = $('#card_month').val(),
        expYear = $('#card_year').val();
      
    //Send the info to Stripe.
    Stripe.createToken({
      number: ccNum,
      cvc: cvcNum,
      exp_month: expMonth,
      exp_year: expYear
    }, stripe.ResponseHandler);
  });
  
  
  //Stripe will return a card token.
  //Inject card token as hidden field into form.
  //Submit form to our Rails app.    
});
