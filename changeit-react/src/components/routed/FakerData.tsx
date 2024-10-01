import React from "react";
import {FakerDataModel} from "../../models/FakerDataModel";
import {FakerItem} from "../display/FakerItem";
import {Card} from "react-bootstrap";

export class FakerData extends React.Component<{}, {
    error: string | null,
    isLoaded: boolean,
    items: FakerDataModel[]
}> {

    constructor(props: object) {
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
            return <FakerItem title={item.title}
                              description={item.description}
                              url={item.url}
                              key={index}
            />
        });

        return <div className='p-4'>
            <Card className='p-2 d-flex justify-content-evenly'>
                <span>
                    Here I render the Faker data with a custom nested component.
                </span>
                <span>
                    I use a flex layout to make the experience responsive.
                </span>
                <span>
                    Hover the images to see the description.
                </span>
            </Card>
            <div className='d-flex flex-row flex-wrap gap-4 justify-content-around p-4'>
                {displayItems}
            </div>
        </div>
    }
}