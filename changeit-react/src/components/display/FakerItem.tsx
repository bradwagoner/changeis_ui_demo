import {FakerDataModel} from "../../models/FakerDataModel";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import {OverlayInjectedProps} from "react-bootstrap/Overlay";

export const FakerItem = (fakerData: FakerDataModel) => {
    // export const FakerItem = (fakerData: {title: string, description: string, url: string}) => {
    const renderTooltip = (props: OverlayInjectedProps) => (
        <Tooltip {...props}>
            {fakerData.description}
        </Tooltip>
    )

    return (
        <div className='d-flex flex-column align-items-center'>
            <h3>{fakerData.title}</h3>

            <OverlayTrigger overlay={renderTooltip}
                            placement='auto'
            >
                <img src={fakerData.url}
                     alt={fakerData.description}
                     className='mw-100'
                     width="380"
                     height="480"
                />
            </OverlayTrigger>
        </div>
    );
};