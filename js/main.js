import React from 'react';
import ReactDom from 'react-dom';
import ExampleWork from './example-work';

const myWork = [
    {
        'title': "React-Portfolio",
        'href': "https://portfolio.donaldtoombs.com",
        'desc': "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum",
        'image': {
            'desc': "example screenshot of a project involving chemistry",
            'src':"images/example1.png",
            'comment':"",
        }
    },

    {
        'title': "Train Scheduler",
        'href': "https://portfolio.donaldtoombs.com",
        'desc': "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum",
        'image': {
            'desc': "example screenshot of a project involving chemistry",
            'src':"images/example2.png",
            'comment':`“Chemistry” by Surian Soosay is licensed under CC BY 2.0
                        https://www.flickr.com/photos/ssoosay/4097410999`
        }
    },
    
    {
        'title': "Football Ticket Searcher",
        'href': "https://portfolio.donaldtoombs.com",
        'desc': "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsumlorem ipsumlorem ipsum lorem ipsum lorem ipsum",
        'image': {
            'desc': "example screenshot of a project involving cats",
            'src':"images/example3.png",
            'comment':`“Bengal cat” by roberto shabs is licensed under CC BY 2.0
            https://www.flickr.com/photos/37287295@N00/2540855181`,
        }
    },
]
/*ExampleWork in the render function sends over work as a prop to ExampleWork component in example-work.js
the prop work equals the array myWork*/
ReactDom.render(<ExampleWork work={myWork}  />, document.getElementById('example-work'))