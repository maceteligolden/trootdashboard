import { Form } from "react-bootstrap";

interface ITextInput {
    label?: string,
    name?: string,
    placeholder?: string,
    onChange?: any,
    onBlur?: any,
    value?: string,
    isInvalid?: boolean,
    errors?: any
}

export default function TextInput(props: ITextInput) {
    return (
        <>
                <div className="mb-3">
                    <Form.Label htmlFor={props.name} className="form-label">{props.label}</Form.Label>
                    <Form.Control className="form-control" id={props.name} placeholder={props.placeholder}
                        name={props.name}
                        type="text"
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        value={props.value || ""}
                        isInvalid={
                            props.isInvalid ? true : false
                        }

                    />
                    {props.isInvalid ? (
                        <Form.Control.Feedback type="invalid">{props.errors}</Form.Control.Feedback>
                    ) : null}
                </div>
        </>
    )
}