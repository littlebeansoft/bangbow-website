import { useState } from 'react'

import uniqueId from 'lodash/uniqueId'

type UseGenerateComponentKey = [string, () => void]

const useGenerateComponentKey = (prefix?: string): UseGenerateComponentKey => {
  const [componentKey, setComponentKey] = useState(uniqueId(prefix))

  const generateNewComponentKey = () => setComponentKey(uniqueId(prefix))

  return [componentKey, generateNewComponentKey]
}

export default useGenerateComponentKey
