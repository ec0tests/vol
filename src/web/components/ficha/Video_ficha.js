import React, {Component} from 'react';



class Video_ficha extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {

        return (

                <div className="col-md-12 p-0 w-100 Padding-1px">
                    <iframe className="w-100 mt-0"
                        src="https://www.youtube.com/embed/Z3kSDjEsCz4">
                    </iframe>
                </div>
        )

    }
}


export default Video_ficha;