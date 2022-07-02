$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "напишите правильный ответ -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                // subject: {
                //     required: true,
                //     minlength: 4
                // },
                // number: {
                //     required: true,
                //     minlength: 5
                // },
                email: {
                    required: true,
                    email: true
                },
                message: {
                    required: true,
                    minlength: 10
                }
            },
            messages: {
                name: {
                    required: "У вас же есть имя, не так ли?",
                    minlength: "Ваше имя должно состоять как минимум из 2 символов"
                },
                // subject: {
                //     required: "come on, you have a subject, don't you?",
                //     minlength: "your subject must consist of at least 4 characters"
                // },
                // number: {
                //     required: "come on, you have a number, don't you?",
                //     minlength: "your Number must consist of at least 5 characters"
                // },
                email: {
                    required: "Нет почты - нет письма"
                },
                message: {
                    required: "Да, вы должны написать что-нибудь сюда",
                    minlength: "Это и всё, правда?"
                }
            },
            submitHandler: function(form) {
                $(form).ajaxSubmit({
                    type:"POST",
                    data: $(form).serialize(),
                    url:"contact_process.php",
                    success: function() {
                        $('#contactForm :input').attr('disabled', 'disabled');
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $(this).find(':input').attr('disabled', 'disabled');
                            $(this).find('label').css('cursor','default');
                            $('#success').fadeIn()
                            $('.modal').modal('hide');
		                	$('#success').modal('show');
                        })
                    },
                    error: function() {
                        $('#contactForm').fadeTo( "slow", 1, function() {
                            $('#error').fadeIn()
                            $('.modal').modal('hide');
		                	$('#error').modal('show');
                        })
                    }
                })
            }
        })
    })
        
 })(jQuery)
})