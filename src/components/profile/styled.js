import styled from 'styled-components';

export const WrapperInfoUsers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: auto;
    margin-left: 8px;
`;

export const Wrapper = styled.div`
    display: flex;
    align-items: flex-start;
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    div{
        margin: 8px;
        text-align: center;
    }
`;

export const WrapperUsername = styled.div`
    display: flex;
    align-items: center;
    h3{
        margin-right: 8px
    }
`;

export const WrapperImage = styled.img`
    border-radius: 50%;
    width: 200px;
    margin: 8px;
`;