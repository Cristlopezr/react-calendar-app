import { useCalendarStore } from '../../hooks';

export const FabDelete = () => {
	const { startDeletingEvent, hasEventSelected } = useCalendarStore();

	const onClickDelete = () => {
		startDeletingEvent();
	};
	return (
		hasEventSelected && (
			<button className='btn btn-danger fab-danger' onClick={onClickDelete}>
				<i className='fas fa-trash-alt'></i>
			</button>
		)
	);
};
