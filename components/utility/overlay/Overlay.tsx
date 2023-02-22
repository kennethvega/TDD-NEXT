type OverlayProps = {
  handleClose?: (e: React.MouseEvent<HTMLElement>) => void;
};

const Overlay = ({ handleClose }: OverlayProps) => {
  return (
    <div
      onClick={handleClose}
      className=" fixed inset-0 z-30 bg-black opacity-30 w-[100vw] h-[100vh]"
      style={{ backgroundColor: "#000" }}
    ></div>
  );
};

export default Overlay;
