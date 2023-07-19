import { forwardRef } from "@chakra-ui/react";
import { device } from "../styles/device";
import styled from "@emotion/styled";

const containerToRef = forwardRef(
    ({ className, children, style, key }: any, ref: any) => {
      return (
        <div key={key} className={className} ref={ref} style={style}>
          {children}
        </div>
      );
    }
  );
  export const Container = styled(containerToRef)`
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    padding: 13px;
    background-color: rgba(60, 33, 228, 0.05);
 
    box-sizing: content-box;
    border-radius: 40px;
    border-style: solid none none none;
    border-color: rgba(48, 55, 48);
    
    transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
    outline: 0.1px solid;
    outline-color: rgba(255, 255, 255, 0.05);
    outline-offset: 0px;
  
  
    @media (${device.mobileS}) {
      border-radius: 10px;
    }
    
    @media (${device.tablet}) {
      border-radius: 40px;
    }
   
  `;