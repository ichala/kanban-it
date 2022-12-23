import React, { useState } from 'react';
import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { MdDeleteForever } from 'react-icons/md';
import { AiOutlinePlus } from 'react-icons/ai';

const EditCardSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(500, 'Too Long!')
    .required('Required'),
  date: Yup.date().required(),
});
const EditCardForm = ({ editcard, card }) => {
  const [Tasks, setTasks] = useState(card.tasks);
  return (
    <Formik
      initialValues={{
        title: card.title,
        description: card.description,
        date: card.date,
      }}
      validationSchema={EditCardSchema}
      onSubmit={(values) => {
        editcard(values, Tasks);
      }}
    >
      {({ errors, touched }) => (
        <Form>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2 text-primary"
              htmlFor="title"
            >
              Tag
            </label>
            <Field
              name="title"
              className={`input input-bordered shadow appearance-none bg-transparent border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline ${
                errors.title && touched.title ? 'input-error' : ''
              }`}
              id="title"
              type="text"
              placeholder="Enter Title"
            />
            {errors.title && touched.title ? (
              <p className="text-error">{errors.title}</p>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2 text-primary"
              htmlFor="description"
            >
              Description
            </label>
            <Field
              name="description"
              as="textarea"
              className={`input min-h-[150px] input-bordered shadow appearance-none bg-transparent border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline ${
                errors.description && touched.description ? 'input-error' : ''
              }`}
              id="description"
              type="text"
              placeholder="Enter Description"
            />
            {errors.description && touched.description ? (
              <p className="text-error">{errors.description}</p>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2 text-primary"
              htmlFor="dueDate"
            >
              Tasks
            </label>
            <div className="flex flex-col gap-2">
              {Tasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center justify-between mb-2 "
                >
                  <div className="flex items-center w-full gap-2">
                    <input
                      onChange={(e) => {
                        setTasks((prev) => prev.map((item) => {
                          if (item.id === task.id) {
                            return {
                              ...item,
                              completed: e.target.checked,
                            };
                          }
                          return item;
                        }));
                      }}
                      type="checkbox"
                      checked={task.completed}
                      className="checkbox checkbox-primary"
                    />
                    <input
                      name="task"
                      className="input w-full input-sm input-bordered shadow appearance-none bg-transparent border rounded   text-primary leading-tight focus:outline-none focus:shadow-outline "
                      id="description"
                      defaultValue={task.content}
                      onChange={(e) => {
                        setTasks((prev) => prev.map((item) => {
                          if (item.id === task.id) {
                            return {
                              ...item,
                              content: e.target.value,
                            };
                          }
                          return item;
                        }));
                      }}
                      type="text"
                      placeholder="Enter Task"
                      required
                    />
                  </div>

                  <MdDeleteForever
                    onClick={() => {
                      setTasks((prev) => prev.filter((item) => item.id !== task.id));
                    }}
                    size={20}
                    className="text-error"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => {
                setTasks((prev) => [
                  ...prev,
                  { id: uuidv4(), content: '', completed: false },
                ]);
              }}
              type="button"
              className="btn text-sm btn-sm btn-primary w-full"
            >
              <AiOutlinePlus />
              Add Task
            </button>
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-bold mb-2 text-primary"
              htmlFor="dueDate"
            >
              Due Date
            </label>
            <Field
              name="date"
              className={`input input-bordered shadow appearance-none bg-transparent border rounded w-full py-2 px-3 text-primary leading-tight focus:outline-none focus:shadow-outline ${
                errors.date && touched.date ? 'input-error' : ''
              }`}
              id="dueDate"
              type="date"
              placeholder="Enter Due Date"
            />
            {errors.date && touched.date ? (
              <p className="text-error">{errors.date}</p>
            ) : null}
          </div>
          <div className="modal-action">
            <Link to="/">
              <button type="button" className="btn btn-sm ">
                Cancel
              </button>
            </Link>
            <button type="submit" className="btn btn-sm btn-success">
              Update
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default EditCardForm;
