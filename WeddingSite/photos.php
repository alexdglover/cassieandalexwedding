<?php
include("header.php");
?>
                    <h2>Photos</h2>
					<div id="galleria">
						<?php
						$counter = 1;
						$files = scandir('img/photos/');
						foreach($files as $file) {
							if($counter>2){
								echo "<a href=\"img/photos/$file\">";
								echo "<img src=\"img/photos/$file\">";
								echo "</a>";
							}
							$counter++;
						}
						?>
					</div>
			</div>
</div>
		<hr>
        </div> <!-- /container -->
		    <script>

			// Load the classic theme
			Galleria.loadTheme('galleria.classic.min.js');

			// Initialize Galleria
			Galleria.run('#galleria');

			</script>
</body>
</html>