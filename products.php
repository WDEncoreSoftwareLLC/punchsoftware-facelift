<?php

$productsArray = [
    ['p-144-punch-interior-design-suite-v19', '4329', 'Punch! Interior Design Suite v19', '39.99', 'From simple renovations to complete home remodels, Interior Design Suite is the right tool for your home...'],
    ['p-139-punch-interior-design-for-mac-v19', '4318', 'Punch! Interior Design for Mac v19', '49.99', 'Showcase the interior of your home with amazing new designs. Perfect every detail with your creativity and...'],
    ['p-143-punch-landscape-deck-patio-v19', '4328', 'Punch! Landscape, Deck &amp; Patio v19', '39.99', 'Design beautiful landscaping and outdoor spaces! Punch! Landscape Deck &amp; Patio Design provides a...'],
    ['p-138-punch-landscape-design-for-mac-v19', '4317', 'Punch! Landscape Design for Mac v19', '59.99', 'Make amazing landscaping and outdoor living plans. Renovate and rebuild or start anew. Bring your home\'s...'],
    ['p-148-punch-home-landscape-design-architectural-series-v19', '4333', 'Punch! Home &amp; Landscape Design Architectural Series v19', '399.99', 'Create architectural quality designs and plans with the ultimate home design software for architects,...'],
    ['p-141-punch-home-design-studio-complete-for-mac-v19', '4320', 'Punch! Home Design Studio Complete for Mac v19', '199.99', 'Impressive tools and realistic visualization combine into the ideal home and landscape design software...'],
    ['p-147-punch-home-landscape-design-professional-v19', '4332', 'Punch! Home &amp; Landscape Design Professional v19', '199.99', 'Design beautiful spaces quickly and easily with the advanced features and tools in Punch Professional home...'],
    ['p-142-punch-home-design-studio-for-mac-v19', '4321', 'Punch! Home Design Studio for Mac v19', '149.99', 'Transform your vision into a workable home and landscape plan. Professionals and DIYers can design or...'],
    ['p-146-punch-home-landscape-design-premium-v19', '4331', 'Punch! Home &amp; Landscape Design Premium v19', '99.99', 'Planning your home design project has never been easier! Punch! Home and Landscape Design Premium has the...'],
    ['p-140-punch-home-design-studio-essentials-for-mac-v19', '4319', 'Punch! Home Design Studio Essentials for Mac v19', '99.99', 'Design your home and landscape the fast and easy way. Over 40 designer quality home plans provide...'],
    ['p-145-punch-home-landscape-design-essentials-v19', '4330', 'Punch! Home &amp; Landscape Design Essentials v19', '49.99', 'Design and update your home with Punch Home and Landscape Design Essentials, the best version yet! Whether...'],
    ['p-150-learning-punch-software-training-tools-tutorials-for-v19-mac-version-by-patricia-gamburgo', '4346', 'Learning Punch Software: Training, Tools &amp; Tutorials for V19 Mac Version by Patricia Gamburgo', '34.99', 'Take your home, landscape or commercial building project to the next level. Work like a pro using the...'],
    ['p-149-learning-punch-software-training-tools-tutorials-for-v19-windows-version-by-patricia-gamb', '4345', 'Learning Punch! Software: Training, Tools &amp; Tutorials for V19 - Windows Version - by Patricia Gamburgo', '34.99', 'Take your home, landscape or commercial building project to the next level. Work like a pro using the...']
];

$productsArrayCount = count($productsArray);

for ($iProduct = 0; $iProduct < $productsArrayCount; $iProduct++) { ?>
<div class="product">
    <div class="product_right">
        <div class="product_image"><a href="<?=$productsArray[$iProduct][0];?>.aspx"><img src="images/Product/icon/<?=$productsArray[$iProduct][1];?>.jpg" alt="<?=$productsArray[$iProduct][2];?>"></a></div>
    </div>
    <div class="product_left">
        <div class="product_name"><a href="<?=$productsArray[$iProduct][0];?>.aspx"><?=$productsArray[$iProduct][2];?></a></div>
        <div>
            <div class="product_price"><span><span class="variantprice">&nbsp;$<?=$productsArray[$iProduct][3];?></span>&nbsp;</span></div>
        </div>
        <div class="product_summary"><?=$productsArray[$iProduct][4];?></div>
        <div><span class="more"><a class="en-btn szsm cdbl" href="<?=$productsArray[$iProduct][0];?>.aspx">Learn More</a></span></div>
    </div>
</div>
<?php } ?>
