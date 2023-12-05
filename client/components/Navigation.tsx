import { Button, Flex, Text } from "@radix-ui/themes"
import { ExitIcon } from "@radix-ui/react-icons"

import { Link } from "react-router-dom"

const Navigation = () => {
  return (
    <Flex align="center" justify="between" mb="4">
      <Link to="/" className="vibes-logo">
        <Text size="7" weight="bold" className="vibes-logo">
          VIBESVAULT
        </Text>
      </Link>
      <Button variant="outline" size="2">
        Log out
        <ExitIcon />
      </Button>
    </Flex>
  )
}

export default Navigation