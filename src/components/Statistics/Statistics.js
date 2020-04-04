import React from 'react';
import propTypes from 'prop-types';
import {
    StatSect,
    StatTitle,
    StatsList
} from './Statistics.styled';
import StatItem from './StatisticsItem';

const Statistics = (props) => {
    const isTitle = () => {
        if (props.title === '') {
            return false
        }
        return true
    };
    return <StatSect>
            {isTitle(props.title) ? 
            <StatTitle>{props.title.toUpperCase()}</StatTitle>
            :
            null}
            <StatsList>
                {props.stats.map((el) => {
                    return <StatItem label={el.label} percentage={el.percentage} key={el.id}></StatItem>
                })}
            </StatsList>
    </StatSect>
};

Statistics.propTypes = {
    title: propTypes.string,
    stats: propTypes.arrayOf(propTypes.shape({
        id: propTypes.string,
        label: propTypes.string,
        percentage: propTypes.number
    }).isRequired)
};

Statistics.defaultProps = {
    title: "",
}

export default Statistics;