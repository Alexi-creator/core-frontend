"use server";

import { revalidatePath } from "next/cache";
import { coursesRepository } from "./courses.repository";

export const createCourseActions = async (
  command: CreateCourseListElementCommand,
  revalidatePagePath: string,
) => {
  await coursesRepository.createCourseElement(command);
  revalidatePath(revalidatePagePath);
};