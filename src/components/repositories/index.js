import React from 'react';
import RepositoryItem from '../repository-item';
import * as S from './styled';

const Repositories = () => {
    return <S.WrapperTabs
        selectedTabClassName='is-selected'
        selectedTabPanelClassName='is-selected'>
        <S.WrapperTabList>
            <S.WrapperTab>Repositories</S.WrapperTab>
            <S.WrapperTab>Starred</S.WrapperTab>
        </S.WrapperTabList>
        <S.WrapperTabPanel>
            <RepositoryItem name='repo 1' linkToRepo='https://api.github.com/repos/jessicacosta07/dinoGameDIO'
                fullName='jessicacosta07/dinoGameDIO' />
        </S.WrapperTabPanel>
        <S.WrapperTabPanel>
            <RepositoryItem name='repo 2' linkToRepo='https://api.github.com/repos/jessicacosta07/challenge-gama'
                fullName='jessicacosta07/challenge-gama' />
        </S.WrapperTabPanel>
    </S.WrapperTabs>
}

export default Repositories;