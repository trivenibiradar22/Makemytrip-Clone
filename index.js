    $(document).ready(function() {

      // ========== SCROLL-BASED HEADER COLLAPSE ==========
      $(window).on('scroll', function() {
        var scrollTop = $(this).scrollTop();
        if (scrollTop > 60) {
          $('.main-header').addClass('scrolled');
        } else {
          $('.main-header').removeClass('scrolled');
        }

        // Back to top button
        if (scrollTop > 400) {
          $('#backToTop').addClass('show');
        } else {
          $('#backToTop').removeClass('show');
        }
      });

      // Back to top click
      $('#backToTop').on('click', function() {
        $('html, body').animate({ scrollTop: 0 }, 400);
      });

      // Trip type toggle (One Way / Round Trip / Multi City)
      $('.trip-type label').on('click', function() {
        $(this).find('input').prop('checked', true);
        var label = $(this).text().trim();
        var $returnField = $('.search-box .field:eq(3)');
        var $returnInput = $returnField.find('input');
        if (label === 'Round Trip') {
          if ($returnField.find('.return-ghost').length) {
            $returnField.find('.return-ghost').remove();
            $returnInput.show();
          }
        } else {
          if (!$returnField.find('.return-ghost').length) {
            $returnInput.hide();
            $('<div class="return-ghost">Tap to add a return date for bigger discount</div>')
              .on('click', function() {
                $('.trip-type label').each(function() {
                  if ($(this).text().trim() === 'Round Trip') {
                    $(this).click();
                  }
                });
              })
              .appendTo($returnField);
          }
        }
      });

      // ========== SWAP FROM/TO ==========
      $('.swap-icon').on('click', function() {
        var fromInput = $('.field-wrap .field input');
        var toInput = $('.field-wrap').next('.field').find('input');
        var temp = fromInput.val();
        fromInput.val(toInput.val());
        toInput.val(temp);
      });

      // ========== OFFER TABS ==========
      $('.offers-tabs .otab').on('click', function() {
        $('.offers-tabs .otab').removeClass('active');
        $(this).addClass('active');
      });

      // ========== COPY COUPON ==========
      $('.copy-code').on('click', function(e) {
        e.stopPropagation();
        var code = $(this).data('code');
        var temp = $('<input>');
        $('body').append(temp);
        temp.val(code).select();
        document.execCommand('copy');
        temp.remove();
        $('.toast-copy').text('Copied: ' + code).addClass('show');
        setTimeout(function() {
          $('.toast-copy').removeClass('show');
        }, 2000);
      });

      // ========== OFFER ITEM  ==========
      $('.offer-item').on('click', function() {
        var title = $(this).find('h4').text().trim();
        
      });

      // ========== DEAL CARD ==========
      $('.deal-card').on('click', function() {
        var title = $(this).find('h3').text().trim();
        
      });

      // ========== BANNER  ==========
      $('.banner-strip .btn').on('click', function() {
        
      });

      // ========== LANGUAGE/CURRENCY DROPDOWN ==========
      $('.lang-curr-wrap > .lang-curr').on('click', function(e) {
        e.stopPropagation();
        $('.lang-curr-wrap').toggleClass('open');
      });
      $(document).on('click', function() {
        $('.lang-curr-wrap').removeClass('open');
        $('.sel-box').removeClass('open');
      });
      $('.lang-curr-dropdown').on('click', function(e) {
        e.stopPropagation();
      });

      // Selection box expand/collapse
      $('.sel-box-header').on('click', function(e) {
        e.stopPropagation();
        var parent = $(this).closest('.sel-box');
        var wasOpen = parent.hasClass('open');
        $('.sel-box').removeClass('open');
        if (!wasOpen) parent.addClass('open');
      });

      // Option selection
      $('.sel-option').on('click', function(e) {
        e.stopPropagation();
        var option = $(this);
        var box = option.closest('.sel-box');
        box.find('.sel-option').removeClass('selected');
        option.addClass('selected');
        var value = option.data('value');
        var header = box.find('.sel-box-header .sel-box-left');
        var type = box.data('type');
        if (type === 'country') {
          var flagHtml = option.find('.flag-icon').prop('outerHTML');
          header.html(flagHtml + ' <span class="sel-value">' + value + '</span>');
        } else {
          var code = option.find('.sel-code').text().trim();
          var name = option.clone().children().remove().end().text().trim();
          header.html('<span class="sel-code">' + code + '</span> <span class="sel-sub">' + name + '</span>');
        }
        box.removeClass('open');
      });

      // Apply button
      $('.apply-btn').on('click', function(e) {
        e.stopPropagation();
        $('.lang-curr-wrap').removeClass('open');
        $('.sel-box').removeClass('open');
      });

      // ========== LOGIN MODAL ==========
      $('.login-btn, .mobile-login-link').on('click', function(e) {
        e.preventDefault();
        $('#loginModal').addClass('open');
      });
      $('.modal-close, .modal-overlay').on('click', function(e) {
        if (e.target === this) $('#loginModal').removeClass('open');
      });

      // Modal tab switching
      $('.modal-tab').on('click', function() {
        $('.modal-tab').removeClass('active');
        $(this).addClass('active');
        var tab = $(this).data('tab');
        if (tab === 'login') {
          $('#loginForm').show();
          $('#signupForm').hide();
        } else {
          $('#loginForm').hide();
          $('#signupForm').show();
        }
      });

      // Login form submit
      $('#loginForm, #signupForm').on('submit', function(e) {
        e.preventDefault();
        $('#loginModal').removeClass('open');
        $('.toast-copy').text('Welcome! You are now logged in.').addClass('show');
        setTimeout(function() { $('.toast-copy').removeClass('show'); }, 2500);
      });

      // Google button
      $('.google-btn').on('click', function() {
        $('#loginModal').removeClass('open');
        $('.toast-copy').text('Redirecting to Google...').addClass('show');
        setTimeout(function() { $('.toast-copy').removeClass('show'); }, 1500);
      });

      // ========== MOBILE MENU ==========
      $('.hamburger').on('click', function() {
        $('#mobileMenu').addClass('open');
      });
      $('.mobile-menu-close, .mobile-menu-overlay').on('click', function(e) {
        if (e.target === this) $('#mobileMenu').removeClass('open');
      });

      // ========== NEWSLETTER ==========
      $('.newsletter-btn').on('click', function() {
        var email = $('.newsletter-input').val().trim();
        if (email) {
          $('.toast-copy').text('Subscribed! Check your inbox for deals.').addClass('show');
          $('.newsletter-input').val('');
          setTimeout(function() { $('.toast-copy').removeClass('show'); }, 2500);
        } else {
          $('.newsletter-input').focus();
        }
      });

      // ========== SEARCH BUTTON ==========
      $('.search-btn').on('click', function() {
        $('.toast-copy').text('Searching for the best deals...').addClass('show');
        setTimeout(function() { $('.toast-copy').removeClass('show'); }, 2000);
      });

      // ========== SEARCH AUTOCOMPLETE ==========
      var cities = [
        { name: 'Delhi', code: 'DEL' }, { name: 'Mumbai', code: 'BOM' },
        { name: 'Bangalore', code: 'BLR' }, { name: 'Chennai', code: 'MAA' },
        { name: 'Kolkata', code: 'CCU' }, { name: 'Hyderabad', code: 'HYD' },
        { name: 'Pune', code: '' }, { name: 'Ahmedabad', code: 'AMD' },
        { name: 'Jaipur', code: 'JAI' }, { name: 'Goa', code: 'GOI' },
        { name: 'Lucknow', code: 'LKO' }, { name: 'Chandigarh', code: 'IXC' },
        { name: 'New York', code: 'JFK' }, { name: 'London', code: 'LHR' },
        { name: 'Dubai', code: 'DXB' }, { name: 'Singapore', code: 'SIN' },
        { name: 'Bangkok', code: 'BKK' }, { name: 'Paris', code: 'CDG' }
      ];

      $('.search-box input[type="text"]').on('input', function() {
        var input = $(this);
        var val = input.val().toLowerCase();
        var wrap = input.closest('.autocomplete-wrap');
        if (!wrap.length) {
          input.wrap('<div class="autocomplete-wrap"></div>');
          wrap = input.closest('.autocomplete-wrap');
        }
        var dropdown = wrap.find('.autocomplete-dropdown');
        if (!dropdown.length) {
          dropdown = $('<div class="autocomplete-dropdown"></div>');
          wrap.append(dropdown);
        }
        if (val.length < 1) { dropdown.removeClass('show').empty(); return; }
        var matches = cities.filter(function(c) {
          return c.name.toLowerCase().indexOf(val) !== -1 || c.code.toLowerCase().indexOf(val) !== -1;
        }).slice(0, 6);
        if (!matches.length) { dropdown.removeClass('show').empty(); return; }
        dropdown.empty();
        matches.forEach(function(c) {
          $('<div class="autocomplete-item">')
            .html('<span>' + c.name + '</span> <span class="city-code">' + c.code + '</span>')
            .on('click', function() {
              input.val(c.name + ' (' + c.code + ')');
              dropdown.removeClass('show').empty();
            })
            .appendTo(dropdown);
        });
        dropdown.addClass('show');
      });

      $(document).on('click', function(e) {
        if (!$(e.target).closest('.autocomplete-wrap').length) {
          $('.autocomplete-dropdown').removeClass('show').empty();
        }
      });

      // ========== OFFERS CAROUSEL (AUTO-SLIDE) ==========
      var carouselInterval = setInterval(function() {
        var $active = $('.offers-tabs .otab.active');
        var $next = $active.next('.otab');
        if (!$next.length) $next = $('.offers-tabs .otab:first');
        $('.offers-tabs .otab').removeClass('active');
        $next.addClass('active');
      }, 4000);

      // ========== WISHLIST LOCALSTORAGE ==========
      $('.wishlist-btn, .mobile-menu-link svg').each(function() {
        // Reuse wishlist localStorage for deal cards
      });

      // Add wishlist toggle to deal cards (double-click to wishlist)
      $('.deal-card').on('dblclick', function() {
        var title = $(this).find('h3').text().trim();
        var wishlist = JSON.parse(localStorage.getItem('mmt_wishlist') || '[]');
        var idx = wishlist.indexOf(title);
        if (idx === -1) {
          wishlist.push(title);
          $('.toast-copy').text('Added "' + title + '" to Wishlist').addClass('show');
        } else {
          wishlist.splice(idx, 1);
          $('.toast-copy').text('Removed "' + title + '" from Wishlist').addClass('show');
        }
        localStorage.setItem('mmt_wishlist', JSON.stringify(wishlist));
        setTimeout(function() { $('.toast-copy').removeClass('show'); }, 2000);
      });

      // ========== LIVE PRICE TRACKER ==========
      setInterval(function() {
        $('.deal-card .price').each(function() {
          var $price = $(this);
          if (!$price.data('original')) {
            $price.data('original', $price.text().trim());
          }
          if (!$price.hasClass('live')) {
            $price.addClass('live');
          }
        });
      }, 3000);

      // ========== SKELETON LOADER (CSS fade-in handles animation) ==========
      // Deal cards fade in via CSS keyframes on page load

      // ========== INIT ==========
      // One Way is default — show ghost return prompt
      (function() {
        var $returnField = $('.search-box .field:eq(3)');
        $returnField.find('input').hide();
        $('<div class="return-ghost">Tap to add a return date for bigger discount</div>')
          .on('click', function() {
            $('.trip-type label').each(function() {
              if ($(this).text().trim() === 'Round Trip') {
                $(this).click();
              }
            });
          })
          .appendTo($returnField);
      })();

    });
