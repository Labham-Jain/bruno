import { useSelector } from "react-redux"

type AppState = {
  tabs: unknown[]
}

const useAppSelector = (callback: (state: AppState) => unknown) => {
  return useSelector<AppState>(callback)
}

export default useAppSelector