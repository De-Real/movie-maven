import React, { useState } from "react";
import Button from "../ui/Button";
import { StyledButton, StyledCommentForm } from "./styles/CommentForm.styled";

import ForumIcon from "@mui/icons-material/Forum";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "../ui/IconButton";

const CommentForm = ({ answer = false }: { answer?: boolean }) => {
	const [textareaValue, setTextareaValue] = useState("");
	const [checked, setChecked] = React.useState(true);

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setChecked(event.target.checked);
	};

	const changeTextareaValue = (event: any) => {
		if (event.target.value.length > 300) return;
		setTextareaValue((event.target as HTMLTextAreaElement).value);
	};

	return (
		<StyledCommentForm isAnswer={answer}>
			<textarea value={textareaValue} onChange={changeTextareaValue} />
			<p>Characters: {textareaValue.length}/300</p>
			<div>
				<label htmlFor="anonymous-checkbox">I wanna comment as Anonymous</label>
				<Checkbox
					color="error"
					size="small"
					checked={checked}
					onChange={handleChange}
					inputProps={{ "aria-label": "controlled" }}
				/>
			</div>

			<StyledButton>
				{answer && <Button>Cancel</Button>}
				<IconButton>
					<ForumIcon />
					<span>{answer ? "Response" : "Add comment"}</span>
				</IconButton>
			</StyledButton>
		</StyledCommentForm>
	);
};

// What if I add some value here and here and here and what about value here what is that fuching good to do but what shound i really do to implement that fyckigna adwadwdw wadwadwad dwad dwad wada

export default CommentForm;
