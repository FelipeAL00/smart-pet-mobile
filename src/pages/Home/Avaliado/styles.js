import styled from "styled-components/native";

export const Container = styled.View`
  margin-bottom: 15px;
  padding: 20px;
  border-radius: 4px;
  background: #eee;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Left = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SymbleEnterprise = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  border: 2px solid ${(props) => (props.color ? props.color : "#2dc7ff")};
`;

export const Info = styled.View`
  margin-left: 15px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #333;
`;

export const Right = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
`;
