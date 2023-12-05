import { Button, Flex, Text } from "@radix-ui/themes"
import { ExitIcon } from "@radix-ui/react-icons"

const Navigation = () => {
  return (
    <Flex align="center" justify="between" mb="4">
      <Text size="7" weight="bold">
        VIBESVAULT
      </Text>
      <Button variant="outline" size="2">
        Log out
        <ExitIcon />
      </Button>
    </Flex>
  )
}

export default Navigation