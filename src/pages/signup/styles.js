import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    max-width: 80%;
    margin: 0 auto;
    margin-top: 120px;

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`
export const Wrapper = styled.div`
    align-content: left;
    max-width: 388px
`
export const Column = styled.div`


`
export const Banner = styled.div`
    padding: 65px 10px;

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;
    max-width: 388px

`
export const Title = styled.div`
    

    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 44px;

`

export const Text = styled.div`
    padding: 10px 0;

    font-family: Open Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;

`
export const TextLegal = styled.div`
    padding-top: 30px;
    padding-bottom: 5px;
    font-family: Open Sans;
    font-size: 18px;
    font-weight: 400;
    line-height: 25px;
    letter-spacing: 0em;
    text-align: left;

`

export const TextUserExists = styled.span`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;

    color: #FFFFFF;
`

export const TextLoginLink = styled.span`
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 19px;
    cursor: pointer;
    color: #23DD7A;
`