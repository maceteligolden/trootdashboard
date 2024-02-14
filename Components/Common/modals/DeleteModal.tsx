import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface IDeleteModal {
    item: string;
    onDelete: any;
    onClose: any;
    status: boolean;
}

function DeleteModal(props: IDeleteModal) {

  return (
    <>


      <Modal
        show={props.status}
        onHide={() => props.onClose()}
      >
        <Modal.Header closeButton>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          You are about to delete "{props.item}"
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => props.onClose()}>
            Cancel
          </Button>
          <Button variant="danger" onClick={() => props.onDelete()}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;