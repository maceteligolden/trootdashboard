import { Row } from "react-bootstrap";

const Taskbar = ( { children } : any) => {
    return (
        <>
            <Row className="row justify-content-end">
                <div className="col">
                   
                        {children}
                   
                </div>
            </Row>
        </>
    )
}

export default Taskbar