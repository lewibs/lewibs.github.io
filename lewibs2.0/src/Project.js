import "./project.css";
import Button from './Button';
import $ from 'jquery';


function Project(props) {
    return (
        <div className='project'>
            <img src={props.image} width='300px' height='300px' />
            <div className='info majorGridItem color1'>
                <h3 className='minorGridItem'>{props.title}</h3>
                <hr />
                <article className='minorGridItem'>{props.info}</article>
                <div className='buttons'>
                    <Button className='background1 color1' text='Visit' href={props.link} />
                </div>
            </div>
        </div>
    );
}

//$('.project').hover(function () { $('.project .info').css('display', 'inline') }, function () { $('.project .info').css('display', 'none') })

export default Project;