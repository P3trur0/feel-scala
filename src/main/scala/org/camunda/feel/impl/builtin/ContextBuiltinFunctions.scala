package org.camunda.feel.impl.builtin

import org.camunda.feel.context.Context
import org.camunda.feel.context.Context.StaticContext
import org.camunda.feel.impl.builtin.BuiltinFunction.builtinFunction
import org.camunda.feel.syntaxtree.{
  Val,
  ValContext,
  ValError,
  ValList,
  ValNull,
  ValString
}

object ContextBuiltinFunctions {

  def functions = Map(
    "get entries" -> List(getEntriesFunction),
    "get value" -> List(getValueFunction),
    "put" -> List(putFunction),
    "put all" -> List(putAllFunction)
  )

  private def getEntriesFunction = builtinFunction(
    params = List("context"),
    invoke = {
      case List(ValContext(c: Context)) =>
        c.variableProvider.getVariables.map {
          case (key, value) =>
            Map("key" -> ValString(key), "value" -> value)
        }.toList
    }
  )

  private def getValueFunction = builtinFunction(
    params = List("context", "key"),
    invoke = {
      case List(ValContext(c), ValString(key)) =>
        c.variableProvider
          .getVariable(key)
          .getOrElse(ValNull)
    }
  )

  private def putFunction = builtinFunction(
    params = List("context", "key", "value"),
    invoke = {
      case List(ValContext(_), ValString(_), ValError(_)) => ValNull
      case List(ValContext(c), ValString(key), value) =>
        ValContext(
          StaticContext(
            variables = c.variableProvider.getVariables + (key -> value)))
    }
  )

  private def putAllFunction = builtinFunction(
    params = List("contexts"),
    invoke = {
      case List(ValList(contexts)) if isListOfContexts(contexts) =>
        ValContext(
          StaticContext(
            variables = contexts
              .flatMap(_ match {
                case ValContext(c) => c.variableProvider.getVariables
                case _             => Map.empty
              })
              .toMap
          )
        )
      case _ => ValNull
    },
    hasVarArgs = true
  )

  private def isListOfContexts(list: List[Val]) =
    list.forall(_.isInstanceOf[ValContext])
}
