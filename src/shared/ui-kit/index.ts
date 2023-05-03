
import { app } from '../../main'

import UButton from '@shared/ui-kit/UButton.vue'

const uiKit = {
    'UButton': UButton
}

/**
 * @title useUIKit helper-hook
 * @description Used for global registetring ui components to use them without import statement
 */
export const useUIKit = () => Object.entries(uiKit).forEach(item => app.component(item[0], item[1]))
