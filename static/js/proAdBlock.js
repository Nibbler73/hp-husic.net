var blockerDetected = true;


	jQuery(document).ready(function($) {
		// mobile device detection
		var isMobile = false; //initiate as false
		// excluded b/c currently there are not many adblockers for mobile platforms
		if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
			isMobile = true;
		}
		// hide the modal if adblocker is enabled
		if (blockerDetected) {
			$('#padb-modal-overlay').hide();
		}
		// show the modal if adblocker is disabled
		else {
			if (!$.cookie('padb_accepted') && !isMobile) {
				$('#padb-modal-overlay').show();
				// generate cookie if user closes modal
				$('.padb-modal-close').click(function() {
					$('#padb-modal-overlay').hide();
					var date = 7 * 24 * 60 * 60; // set cookie to expire after 7 days
//					$.cookie("padb_accepted", true, { path: '/', expires: 7 });
				});
			} else {
				$('#padb-modal-overlay').hide();
			}
		}
	});

