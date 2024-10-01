import React, {Component} from "react";
import {Card, Carousel, Image} from "react-bootstrap";
import {FakerDataModel} from "../../models/FakerDataModel";


export class FakerDataCarousel extends Component<{}, {
    error: string | null,
    isLoaded: boolean,
    items: FakerDataModel[]
}> {

    // imageStyle = {width: 'auto'};// {maxHeight: '80vh', width: 'auto', height: 'auto', display: 'block'};

    constructor(props: any) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('https://fakerapi.it/api/v1/images?_width=380')
            .then(result => result.json())
            .then((result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.data
                    })
                },
                (error) => {
                    this.setState({
                        error: 'Sorry, the faker data was unexpectedly unavailable. Try refreshing?',
                        items: []
                    });
                }
            )
    }

    render() {
        if (this.state.error) {
            return <div className='error-message-class'>{this.state.error}</div>
        }

        let displayItems: any = this.state.items.map((item, index) => {
            return <Carousel.Item key={index}>
                <div className='p-4 d-flex flex-column align-items-center'>
                    <h3>{item.title}</h3>
                    <Image src={item.url}
                           width="380"
                           height="480"
                    />
                    <p className='flex-3'>{item.description}</p>
                </div>
            </Carousel.Item>
        });

        return (
            <div className='col-11 col-lg-6 col-xl-5 p-4'>
                <Card className='p-2 d-flex justify-content-evenly'>
                    <span>
                        This implementation uses the <a
                        href='https://react-bootstrap.netlify.app/docs/components/carousel' target='_blank'>ReactBootstrap Carousel</a> component to render the Faker data.
                    </span>
                    <span>
                        I use a flex layout to make the experience responsive.
                    </span>
                    <span>
                        Hover the images to see the description.
                    </span>
                    <span>
                        If I had spent more time on this I would address the jitter in the navigation buttons caused by the differences in length of the description.
                        I would also address the awkward navigation button rendering when the image src is loading.
                    </span>
                </Card>

                <Carousel data-bs-theme="dark">
                    {displayItems}
                </Carousel>
            </div>
        );
    }
}