import Modal from "@/components/Modal";
import FilterContainer from "./FilterContainer";

const MobileFilter = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <p className="tracking-wide font-medium text-left self-start text-xl mb-10">
        Filter by:
      </p>
      <FilterContainer />
    </Modal>
  );
};

export default MobileFilter;
