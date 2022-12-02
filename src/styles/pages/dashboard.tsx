import styled from "styled-components/native";

export const DashboardWrapper = styled.View`
  margin-top: 50;
  width: 100%;
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: space-between;
`;
export const SubWrapper = styled.View`
  width: 100%;
`;

export const HeaderWrapper = styled.View`
  padding-horizontal: 20;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
export const Hello = styled.Text`
  color: #0f1361;
  font-weight: 500;
`;
export const UserName = styled.Text`
  margin-top: 5;
  color: #0f1361;
  font-weight: 700;
`;
export const ImageWrapper = styled.View`
  width: 12%;
  height: 35;
  border-radius: 50%;
`;

export const UserImage = styled.Image`
  width: 100%;
  height: 100%;
`;
