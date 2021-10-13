import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import { Modal } from '../Modal';
import { Input } from '../Input';


interface FoodProps {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
  available: boolean;
}


interface ModalEditFoodProps {
  isOpen: boolean;
  setIsOpen: (val?: boolean) => void;
  editingFood: FoodProps;
  handleUpdateFood: (object?: FoodProps) => void;
}



export function ModalEditFood({isOpen, setIsOpen, editingFood, handleUpdateFood}: ModalEditFoodProps) {
  const formRef = useRef(null);

  console.log(editingFood);
  
  async function handleSubmit(data: FoodProps) {
    handleUpdateFood(data);
    setIsOpen(false);
  }
  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" />

        <Input name="name" />
        <Input name="price" />

        <Input name="description"/>

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}
