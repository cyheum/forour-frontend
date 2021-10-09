import React from 'react';
import styled from 'styled-components';
import { useRecoilState } from 'recoil';
import { receiverState, receiverTypeState, errorTextState } from '@/store/main';
import { mixins } from '@/styles';

interface IProps {
  goToNext(): void;
}

const STDTitle = styled.h2`
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
  font-weight: 500;
  line-height: 1.8125rem;
`;

const STDDescription = styled.p`
  font-size: 0.875rem;
  color: #4d4d4d;
`;

const STDSelectContainer = styled.article`
  ${mixins.flexSet('center', 'center', 'column')}
  margin: 6.4375rem 0 10.28125rem;
`;

const STDMyImage = styled.img`
  width: 2.375rem;
  margin-bottom: 2.25rem;
`;

const STDSelectWrapper = styled.div`
  ${mixins.flexSet()}
  width: 100%;
  margin-bottom: 2.875rem;
`;

type SelectBoxProps = {
  isSelected?: boolean;
  imgWidth?: number;
};

const STDSelectBox = styled.div<SelectBoxProps>`
  ${mixins.flexSet()}
  flex: 1;
  height: 3.4375rem;
  border: 0.0625rem solid black;
  background-color: ${({ isSelected }) => (isSelected ? '#ff5d95' : '#f0f0f0')};
  font-size: 1.75rem;
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#717171')};
  cursor: pointer;

  &:first-child {
    margin-right: 0.4375rem;
  }

  img {
    width: ${({ imgWidth }) => imgWidth ?? 4.5625}rem;
    padding-bottom: 0.25rem;
    object-fit: contain;
  }
`;

const STDSelectResult = styled.div`
  ${mixins.flexSet()}
  position: relative;
  width: 10.625rem;
  border-bottom: 0.0625rem solid black;

  input {
    text-align: center;
    font-size: 1.375rem;
    padding-bottom: 0.46875rem;
    border: none;
  }

  > img {
    position: absolute;
    bottom: 0.75rem;
    width: 4.375rem;
    z-index: -1;
  }
`;

const STDNextButton = styled.div`
  ${mixins.flexSet()}

  button {
    font-size: 1.125rem;
    color: black;
    line-height: 1.625rem;
    text-decoration: underline;
  }
`;

const Step2Container: React.FC<IProps> = ({ goToNext }) => {
  const [receiver, setReceiver] = useRecoilState(receiverState);
  const [receiverType, setReceiverType] = useRecoilState(receiverTypeState);
  const [errorText, setErrorText] = useRecoilState(errorTextState);

  return (
    <>
      <STDTitle>누구에게 선물할 꽃인가요?</STDTitle>
      <STDDescription>
        친구나 애인을 선택하고 이름을 입력해주세요
      </STDDescription>
      <STDSelectContainer>
        <STDMyImage alt="my image" src="/my.png" />
        <STDSelectWrapper>
          <STDSelectBox
            isSelected={receiverType === 'friend'}
            onClick={() => setReceiverType('friend')}
          >
            <img
              src={`/friend_${
                receiverType === 'friend' ? 'white' : 'gray'
              }.png`}
            />
          </STDSelectBox>
          <STDSelectBox
            isSelected={receiverType === 'lover'}
            imgWidth={4.0625}
            onClick={() => setReceiverType('lover')}
          >
            <img
              src={`/lover_${receiverType === 'lover' ? 'white' : 'gray'}.png`}
            />
          </STDSelectBox>
        </STDSelectWrapper>
        <STDSelectResult>
          <input
            value={receiver}
            onChange={(e) => setReceiver(e.target.value)}
          />
          {receiver.length === 0 && <img src="/name_gray.png" />}
        </STDSelectResult>
      </STDSelectContainer>
      <STDNextButton>
        <button
          onClick={() => {
            if (receiverType.length < 1 || receiver.length < 1) {
              setErrorText('설문을 완료해 주세요.');
            } else {
              errorText.length > 0 && setErrorText('');
              goToNext();
            }
          }}
        >
          다음
        </button>
      </STDNextButton>
    </>
  );
};

export default Step2Container;
