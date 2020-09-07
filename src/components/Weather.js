import React from 'react';

export default function Weather(props) {
	return (
		<div className="info">
			{props.temperature && (
				<p className="info_key">
					Temperature: <span className="info-value">{props.temperature}</span>
				</p>
			)}
			{props.city && (
				<p className="info_key">
					City:<span>{props.city}</span>
				</p>
			)}
			{props.country && (
				<p className="info_key">
					Country: <span className="info-value">{props.country}</span>
				</p>
			)}
			{props.humidity && (
				<p className="info_key">
					Humidity: <span className="info-value">{props.humidity}</span>
				</p>
			)}
			{props.description && (
				<p className="info_key">
					Description: <span className="info-value">{props.description}</span>
				</p>
			)}
			{props.error && (
				<p className="info_key">
					Error: <span className="info-value">{props.error}</span>
				</p>
			)}
		</div>
	);
}
