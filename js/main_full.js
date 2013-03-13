		$(document).ready(function() {
		
			$('.iosSlider').iosSlider({
				scrollbar: false,
				snapToChildren: true,
				desktopClickDrag: true,
				scrollbarMargin: '5px 40px 0 40px',
				scrollbarBorderRadius: 0,
				scrollbarHeight: '2px',
				navPrevSelector: $('.prevButton'),
				navNextSelector: $('.nextButton')
			});

				// We only want these styles applied when javascript is enabled
				$('div.slider_navigation').css({'width' : '300px', 'float' : 'left'});
				$('div.slider_content').css('display', 'block');

				// Initialize Advanced Galleriffic Gallery
				var gallery = $('#thumbs').galleriffic({
					delay:                     3000,
					numThumbs:                 20,
					preloadAhead:              40, // Set to -1 to preload all images
					enableTopPager:            false,
					enableBottomPager:         false,
					maxPagesToShow:            7,
					imageContainerSel:         '#slideshow',
					controlsContainerSel:      '#controls',
					captionContainerSel:       '#caption',
					loadingContainerSel:       '#loading',
					renderSSControls:          false,
					renderNavControls:         false,
					playLinkText:              'Play',
					pauseLinkText:             'Pause',
					prevLinkText:              'Previous',
					nextLinkText:              'Next',
					nextPageLinkText:          'Next &rsaquo;',
					prevPageLinkText:          '&lsaquo; Prev',
					enableHistory:             false,
					enableKeyboardNavigation:  true,
					autoStart:                 false,
					syncTransitions:           false,
					defaultTransitionDuration: 0
				});
		});