import React, { useEffect } from "react";
import { IonSlides } from "@ionic/react";

const slideOptsDefault = {
  initialSlide: 1,
  speed: 400,
};

interface SlidersProps {
  children: React.ReactNode;
  setSelected: React.Dispatch<React.SetStateAction<number>>;
  override?: {
    slideOpts?: any;
  };
}


const Sliders = React.forwardRef<HTMLIonSlidesElement, SlidersProps>(
  (props, ref) => {
    const { setSelected, override, children } = props;
    const slideOpts = override?.slideOpts
      ? override.slideOpts
      : slideOptsDefault;

    useEffect(() => {
      const slideChange = () => {
        //@ts-ignore
        ref.current?.getActiveIndex().then((currentIndex: number) => {
          setSelected(currentIndex);
        });
      };
      //@ts-ignore
      if (ref.current != null) {
        //@ts-ignore
        ref.current.addEventListener("ionSlideDidChange", slideChange);
      }
      return () => {
        //@ts-ignore
        ref.currect.removeEventListener("ionSlideDidChange", slideChange);
      };
    }, [ref, setSelected]);

    return (
      <IonSlides ref={ref} pager={false} options={slideOpts}>
        {children}
      </IonSlides>
    );
  }
);

export default Sliders;
