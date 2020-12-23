import { useRouter } from 'next/router';

import { Button } from './style';
import ChevronLeftSVG from 'assets/svg/ChevronLeft.svg';

const GoBackButton = () => {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()}>
      <ChevronLeftSVG />
    </Button>
  );
};

export default GoBackButton;
