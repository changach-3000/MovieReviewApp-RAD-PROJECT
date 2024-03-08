import React, { useContext, useState } from 'react';
import { ReviewContext } from '../context/ReviewContext';

function AddReview({ onClose, movie_id}) { // Receive movieId as a prop
    const { AddReviews } = useContext(ReviewContext);
    const [comment, setComment] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        AddReviews(comment, movie_id); // Use movieId from props
        setComment('');
        onClose();
    };

    return (
        <div className="popup">
            <div className="popup-content">
                <span className="close" onClick={onClose}>&times;</span>
                <h3 className="text-center">Leave Comment/ Review</h3>
                <form onSubmit={handleSubmit}>
                    <div className="mb-2">
                        <textarea type="text" placeholder="Leave Comment" className="form-control" onChange={(e) => setComment(e.target.value)} />
                    </div>
                    {/* No need to input movie_id as it is received as a prop */}
                    <div className="d-grid">
                        <button style={{ backgroundColor: '#FFC244FF', borderColor: '#FFC244FF' }} className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddReview;
