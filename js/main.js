//  адаптив навигации
var menuBox = document.getElementsByClassName("tgl")[0];
var menuMobile = document.getElementsByClassName("nav-menu")[0];
menuBox.addEventListener("click", function(){menuMobile.classList.toggle("nav-menu")});
    


    $(document).ready(function () {
      $('#uniqueId').buzinaPagination({
        itemsOnPage:2
      });
    });


//сладйер
    $('#myCarousel').carousel({
      interval: 2000
    })
    
    $('.carousel .item').each(function(){
      var next = $(this).next();
      if (!next.length) {
        next = $(this).siblings(':first');
      }
      next.children(':first-child').clone().appendTo($(this));
      
      for (var i=0;i<2;i++) {
        next=next.next();
        if (!next.length) {
          next = $(this).siblings(':first');
        }
        
        next.children(':first-child').clone().appendTo($(this));
      }
    });

// удление товара по клику на ремув лист и иконку корзины
function func(){
  var elem = document.getElementById("myDiv");
  elem.parentNode.removeChild(elem);
}

function funcTwo(){
  var elem = document.getElementById("myDivTwo");
  elem.parentNode.removeChild(elem);
}


function funcThree(){
  var elem = document.getElementById("myDivThree");
  elem.parentNode.removeChild(elem);
}

function funcFour(){
  var elem = document.getElementById("myDivFour");
  elem.parentNode.removeChild(elem);
}

function funcFive(){
  var elem = document.getElementById("myDivFive");
  elem.parentNode.removeChild(elem);
}

function funcSix(){
  var elem = document.getElementById("myDivSix");
  elem.parentNode.removeChild(elem);
}

function funcSeven(){
  var elem = document.getElementById("myDivSeven");
  elem.parentNode.removeChild(elem);
}

function funcEight(){
  var elem = document.getElementById("myDivEight");
  elem.parentNode.removeChild(elem);
}


// проверка на ввод поля подписки в футере

$(document).ready(function() {
	$('#email').blur(function() {
		if($(this).val() != '') {
		
		} else {
	
			$(this).css({'border' : '1px solid #',});
			$('#valid').text('Поле пустое. Введите e-mail.');
    }
  
	});
});



//поиск товара по названию
jQuery(document).ready(function($){

  $('.row .col-sm-3').each(function(){
  $(this).attr('data-search-term', $(this).text().toLowerCase());
  });
  
  $('.live-search-box').on('keyup', function(){
  
  var searchTerm = $(this).val().toLowerCase();
  
      $('.row .col-sm-3').each(function(){
  
          if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {
              $(this).show();
          } else {
              $(this).hide();
          }
  
      });
  
  });
  
  });


//удаление поля поиска товара
var inputs = document.querySelectorAll('input[type=text]');
function delSearch(){
for (var i = 0;  i < inputs.length; i++) {
  inputs[i].value = '';
};
}

