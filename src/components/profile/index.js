import React from 'react';
import * as S from './styled';

const Profile = () => {
    return (
        <S.Wrapper>
            <S.WrapperImage src="https://avatars.githubusercontent.com/u/65916297?v=4" alt="Picture of user" />
            <S.WrapperInfoUsers>
                <div>
                    <h1>Jessica Costa</h1>
                    <S.WrapperUsername>
                        <h3>Username: </h3>
                        <a href="https://github.com/jessicacosta07" target="_blank">jessicacosta07</a>
                    </S.WrapperUsername>
                </div>
                <S.WrapperStatusCount>
                    <div>
                        <h4>Followers</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Starredss</h4>
                        <span>5</span>
                    </div>
                    <div>
                        <h4>Following</h4>
                        <span>5</span>
                    </div>
                </S.WrapperStatusCount>
            </S.WrapperInfoUsers>
        </S.Wrapper>
    );
};

export default Profile;