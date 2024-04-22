# Micro UI POC

## Code Structure

The POC includes all domains in the same git repository because the projects are intentionally small for readability. In a mature setup each `poc-*` folder would be its own git repository, with its own pipeline and code deployments. One of the major advantages of the Micro UI strategy is independent development and release schedules.

## Container Domains

The purpose of a container domain is to support shell components, sub-domain components, and micro domain integration.

- [POC Portal](/poc-portal)

## Micro Domains

The purpose of a micro domain is to support dedicated feature concerns that are meant to be injected into one or more container domains.

- [POC Information](/poc-information)
- [POC Messages](/poc-messages)
- [POC Resource Library](/poc-resource-library)

## Technology

### Web Components

Micro domains are integrated into one or more container domains by using Web Components to wrap UI framework components.

Data can be passed from the container to a micro domain component via attributes. This exchange should be limited. For many use cases, attributes might not be needed at all.

> This POC does not have a formal authentication implementation. If the container domain uses a product like Auth0 to generate a token, then the JWT could be passed seamlessly to the gateway layer via cookies. In an enterprise platform, it's common to have the same gateway domain. If the domain is not the same, then extra steps might be necessary - such as passing the JWT across domain boundaries.
