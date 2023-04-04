var homePageContent4Loading = `<div class="home">
<div class="hero">
    <div class="info">
        <h1>The Outdoors Supply Shop</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus eaque qui id corporis fugit veniam voluptates sed accusantium, voluptatum, debitis officiis adipisci? Placeat temporibus aspernatur sit suscipit, deleniti dignissimos.</p>
        <a href=#>Learn More</a>
    </div>
</div>
<div class="bellow">
    <h1>Information</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis rerum at voluptate magni. Sunt quis dolor, nostrum aliquid modi harum nesciunt culpa reprehenderit dolores voluptates voluptatem libero adipisci officiis deserunt?</p>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat fugit ducimus in, voluptatum eos illum quisquam veritatis. Numquam voluptas repellendus, adipisci amet reprehenderit dignissimos ab id vel voluptate, sint error!</p>
</div>
</div>`
var aboutPageContent4Loading = `<div class="about">
<div class="profile">
    <div class="pic"></div>
    <div class="info">
        <h1>Founder</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est fugit, ratione voluptatibus iste dolores, officia, repellendus neque laborum alias accusamus rem in ut eaque nemo odit voluptate vero corrupti.</p>
    </div>
</div>
<div class="profile">
    <div class="pic"></div>
    <div class="info">
        <h1>Co-Founder</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est fugit, ratione voluptatibus iste dolores, officia, repellendus neque laborum alias accusamus rem in ut eaque nemo odit voluptate vero corrupti.</p>
    </div>
</div>
<div class="profile">
    <div class="pic"></div>
    <div class="info">
        <h1>Important Person</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt est fugit, ratione voluptatibus iste dolores, officia, repellendus neque laborum alias accusamus rem in ut eaque nemo odit voluptate vero corrupti.</p>
    </div>
</div>
</div>`
var productsPageContent4Loading = `<div class="products">
<div class="line">
    <div class="item">
        <img src="images/backpack.jpg" alt="backpack">
        <div>
            <a href=#>Purchase</a>
        </div>
    </div>
    <div class="item">
        <img src="images/jacket.jpg" alt="jacket">
        <div>
            <a href=#>Purchase</a>
        </div>
    </div>
    <div class="item">
        <img src="images/tent.jpg" alt="tent">
        <div>
            <a href=#>Purchase</a>
        </div>
    </div>
    <div class="item">
        <img src="images/tent.jpg" alt="tent">
        <div>
            <a href=#>Purchase</a>
        </div>
    </div>
</div>
<div class="line">
    <div class="item">
        <img src="images/tent.jpg" alt="tent">
        <div>
            <a href=#>Purchase</a>
        </div>
    </div>
    <div class="item">
        <img src="images/backpack.jpg" alt="backpack">
        <div>
            <a href=#>Purchase</a>
        </div>
    </div>
    <div class="item">
        <img src="images/jacket.jpg" alt="jacket">
        <div>
            <a href=#>Purchase</a>
        </div>
    </div>
    <div class="item">
        <img src="images/backpack.jpg" alt="backpack">
        <div>
            <a href=#>Purchase</a>
        </div>
    </div>
</div>
</div>`
var contactPageContent4Loading = `<div class="contact">
<div class="banner"></div>
<div class="form">
    <h1>Contact Us</h1>
    <h4>Name:</h4>
    <input type="text">
    <h4>Email:</h4>
    <input type="text">
    <h4>Message:</h4>
    <textarea name="message" id="" cols="30" rows="10"></textarea>
</div>
<div class="submission">
    <a href=#>Submit</a>
</div>
</div>`

function loadPageContent(cntName){
    $("#app").html(eval(cntName));
}

function readyLinks2Work(){
    $("nav a").on("click", function(e){
        let btnID = e.currentTarget.id;
        let pgID = btnID + "PageContent4Loading";
        loadPageContent(pgID)
    });
}

$(document).ready(function(){
    loadPageContent("homePageContent4Loading");
    readyLinks2Work();    
});