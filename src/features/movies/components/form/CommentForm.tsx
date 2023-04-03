import React, { useState } from "react";
import Button from "../../../../components/ui/Button";
import { StyledButton, StyledCommentForm } from "./styles/CommentForm.styled";

import ForumIcon from "@mui/icons-material/Forum";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "../../../../components/ui/IconButton";

import { CommentResponseBody } from "../../types/comments";
import Alert from "../../../../components/ui/Alert";

type CommentFormProps = {
	answer?: boolean;
	onManageResponse?: () => void;
	onSubmitResponse: (body: CommentResponseBody) => void;
};

const CommentForm = ({
	answer = false,
	onManageResponse,
	onSubmitResponse,
}: CommentFormProps) => {
	const [textareaValue, setTextareaValue] = useState("");
	const [checked, setChecked] = useState(true);
	const [openError, setOpenError] = useState(false);

	const handleOpenError = () => {
		setOpenError(true);
	};

	const handleCloseError = (
		_event?: React.SyntheticEvent | Event,
		reason?: string
	) => {
		if (reason !== "clickaway") {
			setOpenError(false);
		}
	};

	const cancelResponseHandler = () => {
		if (onManageResponse) {
			onManageResponse();
		}
	};

	const submitResponse = () => {
		if (textareaValue.length <= 15) {
			handleOpenError();
			return false;
		}

		setTextareaValue("");

		onSubmitResponse({
			text: textareaValue,
			anonymous: checked,
		});
	};

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	const changeTextareaValue = (event: any) => {
		if (event.target.value.length > 300) return;
		handleCloseError();
		setTextareaValue((event.target as HTMLTextAreaElement).value);
	};

	return (
		<>
			<StyledCommentForm isAnswer={answer}>
				<textarea value={textareaValue} onChange={changeTextareaValue} />
				<p>Characters: {textareaValue.length}/300</p>
				<div>
					<label htmlFor="anonymous-checkbox">
						I wanna comment as Anonymous
					</label>
					<Checkbox
						color="error"
						size="small"
						checked={checked}
						onChange={handleChange}
						inputProps={{ "aria-label": "controlled" }}
					/>
				</div>

				<StyledButton>
					{answer && <Button onClick={cancelResponseHandler}>Cancel</Button>}
					<IconButton onClick={submitResponse}>
						<ForumIcon />
						<span>{answer ? "Response" : "Add comment"}</span>
					</IconButton>
				</StyledButton>
			</StyledCommentForm>
			<Alert
				title="Your comment should contain more than 15 characters!"
				handleClose={handleCloseError}
				open={openError}
				type="error"
			/>
		</>
	);
};

export default CommentForm;
