import React, {Component} from 'react';
import './Arrow_top.css';
import $ from 'jquery';

$(window).scroll(function() {
    if ($(this).scrollTop() >= 100) {
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});

function returnTop(){
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
}
class Arrow_top extends React.Component {


    render() {

        return (
            <div>
                <a onClick={returnTop} id="return-to-top" className=" text-white"><i className="fas fa-arrow-up text-white"></i></a>
            </div>
    )

    }
    }

    export default Arrow_top;
