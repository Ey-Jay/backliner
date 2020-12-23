import { useRouter } from 'next/link';

import { Button } from './style';
import { ReactComponent as ChevronLeftSVG } from 'assets/svg/ChevronLeft.svg';

const GoBackButton = () => {
  const router = useRouter();

  return (
    <Button onClick={() => router.back()}>
      <ChevronLeftSVG />
    </Button>
  );
};

export default GoBackButton;
