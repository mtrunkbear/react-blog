import React, { CSSProperties, MouseEventHandler, StyleHTMLAttributes } from "react";
import styled from "@emotion/styled";
import { StyleFunctionProps, StyleObjectOrFn, StyleProps } from "@chakra-ui/react";

interface CircleButtonProps {
  text?: string | undefined;
  image?: string;
  size: number | string;
  onClick?: () => any;
  styles?: React.CSSProperties;
}

const ButtonContainer = styled.div<{ size: string | number; style: any }>`
  display: flex;
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  flex: 0 0 ${({ size }) => size};
  align-items: center;
  justify-content: center;
  ${({ style }) => style};
`;

const Button = styled.button<{ hasOnClick: boolean }>`
  background-color: transparent;
  border-color: transparent;
  padding: 0;
  cursor: ${({ hasOnClick }) => hasOnClick && "pointer"};
`;

const Icon = styled.div<{ iconSize: number }>`
  display: flex;
  height: ${({ iconSize }) => iconSize}px;
  width: ${({ iconSize }) => iconSize}px;
  border: 2.5px solid black;
  border-radius: 100%;
  background-color: #e0e5f2;
  align-items: center;
  justify-content: center;
  line-height: 24px;
  position: relative;
`;

const CircleButtonText = styled.p`
  margin: 0;
  font-size: 14px;
  font-weight: 800;
  color: #2b3674;
`;

export const CircleButton: React.FC<CircleButtonProps> = ({
  text,
  image,
  size,
  onClick,
  styles,
}: CircleButtonProps) => {
  const buttonSize = Number(size);
  const iconSize = buttonSize * 1.7;
  const hasOnClick = Boolean(onClick);

  return (
    <ButtonContainer size={size } style={styles} onClick={onClick}>
      <Button hasOnClick={hasOnClick}>
        <Icon iconSize={iconSize}>
          {image && (
            <img
              style={{
                borderRadius: "100%",
              }}
              height="100%"
              width="100%"
              src={image}
              alt=""
            />
          )}
          <CircleButtonText>{text}</CircleButtonText>
        </Icon>
      </Button>
    </ButtonContainer>
  );
};

const PostButtonStyle = styled.button`
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 180px;
  height: 40px;
  bottom: 0px;
  border: solid 1px rgba(200, 200, 200, 0.3);
  background: rgba(217, 217, 217, 0.03);
  border-radius: 15px;
  transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
  outline: 0.5px solid;
  outline-color: rgba(100, 100, 100, 0.5);
  outline-offset: 0px;
  text-shadow: none;
  cursor: pointer;
  &:hover {
    border: 1px solid rgba(84, 227, 70, 1);
    box-shadow: inset 0 0 20px rgba(100, 225, 100, 0.5),
      0 0 20px rgba(100, 225, 100, 0.2);
    outline-color: rgba(100, 225, 100, 0);
    outline-offset: 15px;
    text-shadow: 1px 1px 2px rgba(84, 227, 70, 1);
  }
`;

const PostButtonP = styled.p`
  font-size: 12px;
  font-weight: 100;
  line-height: 26px;
`;

export const PostButton = ({
  onClick,
  style
}: {
  onClick: MouseEventHandler<HTMLButtonElement>;
  style: CSSProperties;
}) => {
  return (
    <PostButtonStyle style={style} onClick={onClick}>
      <PostButtonP>Publicar</PostButtonP>
    </PostButtonStyle>
  );
};

export const LinkStyle = styled.a<{
  width?: any | undefined;
  filterColor: string;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: white;
  width: ${({ width }) => (width ? width : undefined)};
  &:hover {
    filter: ${({ filterColor }) => filterColor};
  }
`;

const CategoriesButtonContainer = styled(LinkStyle)`
  cursor: pointer;
  display: flex;
  background: rgba(23, 26, 98, 0.27);
  border-radius: 15px;
  width: 150px;
  margin-left: 10px;
  height: 38px;
  margin-right: 10px;
  place-content: center;
  align-items: center;
  color: rgba(253, 182, 0, 1);
  font-size: 13px;
`;

export const CategoriesButton = ({
  children,
  filterColor,
  style
}: {
  children: any;
  filterColor: string;
  style?:any;
}) => {
  const filterColors: { [key: string]: string } = {
    violet: " invert(0.4) sepia(1) hue-rotate(200deg) saturate(1000%)",
    green: "invert(0.4) sepia(1) hue-rotate(110deg) saturate(200%)" 
  };

  return (
    <CategoriesButtonContainer style={style} filterColor={filterColors[filterColor]}>
      {children}
    </CategoriesButtonContainer>
  );
};
